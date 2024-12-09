// backend/controllers/aiMatchController.js

// Dummy AI matching logic
export const aiMatch = (req, res) => {
    const { skills } = req.body;  // Skills of the user
    // For now, just return mock data based on skills
    const matchingJobs = [
      { title: 'Software Engineer', company: 'TechCorp', skillsRequired: ['JavaScript', 'React'] },
      { title: 'Data Scientist', company: 'DataLabs', skillsRequired: ['Python', 'Machine Learning'] },
    ];
  
    const matchedJobs = matchingJobs.filter(job => job.skillsRequired.some(skill => skills.includes(skill)));
    res.json(matchedJobs);
  };
  