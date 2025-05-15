'use client';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { useState, ChangeEvent } from 'react';

function FileUploadRenderer(props: any) {
    const [error, setError] = useState('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const validTypes = ["application/pdf", "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!validTypes.includes(file.type) || file.size > maxSize) {
            setError('Invalid file type or size (Max 5MB, PDF/DOC/DOCX)');
            props.handleChange(props.path, '');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            props.handleChange(props.path, base64);
            setError('');
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <label>{props.label}</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
}

export default withJsonFormsControlProps(FileUploadRenderer);