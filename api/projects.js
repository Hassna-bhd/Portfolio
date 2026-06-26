export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const filePath = process.env.GITHUB_FILE;

    if (!token || !owner || !repo || !filePath) {
      return res.status(500).json({
        error: "Missing environment variables"
      });
    }

    // Lire projects.json depuis GitHub
    const githubFile = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github+json"
        }
      }
    );

    const fileData = await githubFile.json();

    if (!githubFile.ok) {
      return res.status(githubFile.status).json({
        error: "GitHub API error",
        details: fileData
      });
    }

    // GET : récupérer les projets
    if (req.method === "GET") {
      const content = JSON.parse(
        Buffer.from(fileData.content, "base64").toString("utf8")
      );

      return res.status(200).json(content);
    }

    // POST : mettre à jour les projets
    if (req.method === "POST") {
      const projects = req.body;

      const encodedContent = Buffer.from(
        JSON.stringify(projects, null, 2)
      ).toString("base64");

      const update = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: "Update projects.json from dashboard",
            content: encodedContent,
            sha: fileData.sha
          })
        }
      );

      const result = await update.json();

      if (!update.ok) {
        return res.status(update.status).json({
          error: "GitHub update failed",
          details: result
        });
      }

      return res.status(200).json({
        success: true,
        message: "Projects updated successfully",
        data: result
      });
    }

    return res.status(405).json({
      error: "Method not allowed"
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
