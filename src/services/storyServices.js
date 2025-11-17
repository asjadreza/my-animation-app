export const translateText = async (text, source_language, target_language) => {
  const response = await fetch("http://127.0.0.1:8000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      source_language,
      target_language,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to translate text");
  }

  const data = await response.json();
  return data.translation;
};
