/**
 * GitHub API Integration & Fallback Service
 * Dynamically queries public repositories for Karthick-2307
 * Falls back cleanly to verified static projects if rate-limited or unavailable.
 */

const GITHUB_USERNAME = "Karthick-2307";

async function fetchGitHubData() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: controller.signal }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`, { signal: controller.signal })
    ]);

    clearTimeout(timeoutId);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API responded with status ${userRes.status}/${reposRes.status}`);
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    return {
      success: true,
      user: userData,
      repos: reposData
    };
  } catch (error) {
    console.warn("GitHub API dynamic fetch fell back to static verified data:", error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

window.fetchGitHubData = fetchGitHubData;
