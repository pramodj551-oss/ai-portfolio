export const skills = ["react", "node", "javascript", "ai", "ml"];

export function analyzeResume(text) {
  text = text.toLowerCase();

  let score = 0;
  let foundSkills = [];

  skills.forEach(skill => {
    if (text.includes(skill)) {
      score += 20;
      foundSkills.push(skill);
    }
  });

  return {
    score,
    foundSkills,
    suggestions:
      score < 60 ? "Add more relevant skills" : "Good profile"
  };
}
