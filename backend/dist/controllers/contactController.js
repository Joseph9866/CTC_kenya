"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContactForm = void 0;
const supabase_1 = require("../config/supabase");
const submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        // Validation
        if (!name || !email || !subject || !message) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ error: 'Invalid email format' });
            return;
        }
        const { data, error } = await supabase_1.supabase
            .from('contact_submissions')
            .insert([
            {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                subject,
                message: message.trim(),
                created_at: new Date().toISOString(),
            },
        ])
            .select()
            .single();
        if (error) {
            console.error('Supabase error:', error);
            res.status(500).json({ error: 'Failed to submit contact form' });
            return;
        }
        res.status(201).json({
            message: 'Contact form submitted successfully',
            data,
        });
    }
    catch (err) {
        console.error('Contact form error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.submitContactForm = submitContactForm;
