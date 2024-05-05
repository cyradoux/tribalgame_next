const API_URL = "https://mybusiness.googleapis.com/v4";

export async function fetchReviews(accountId, locationId) {
  const url = `${API_URL}/accounts/${accountId}/locations/${locationId}/reviews`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
}
