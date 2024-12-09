export async function getProfile(req, res) {
    res.status(200).json(req.user);
}

export async function updateProfile(req, res) {
    const { name, profile } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.user.id, { name, profile }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
