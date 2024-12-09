export async function getRecommendations(req, res) {
    // Mocking AI job recommendation response
    const recommendedJobs = [
        { id: 1, title: 'Software Engineer', company: 'Tech Corp' },
        { id: 2, title: 'Data Scientist', company: 'Data Inc.' },
    ];
    res.status(200).json(recommendedJobs);
}
