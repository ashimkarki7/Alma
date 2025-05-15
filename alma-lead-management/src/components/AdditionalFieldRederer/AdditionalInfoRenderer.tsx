'use client';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './AdditionInfo.module.css'
import Image from 'next/image';

const AdditionalInfoRenderer = ({ data, handleChange, path }: ControlProps) => {
    return (
        <div className={styles?.AdditionInfoContainer}>
            <div className={styles.introSection}>
                <Image
                    src="/images/blue.png"
                    alt="Lead Form Icon"
                    className={styles.icon}
                    width={100}  height={80}
                />
                <h2 className={styles.heading}>
                    {`How can we help you?`}
                </h2>
            </div>
            <TextareaAutosize
                id="additionalInfo"
                minRows={4}
                placeholder={`What is your current status and when does it expire?
What is your pass immigration history? Are you looking for a 
long term permanent residence? or short term visa? or both`}
                value={data || ''}
                onChange={(e) => handleChange(path, e.target.value)}
                style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                }}
            />
        </div>
    );
};

export default withJsonFormsControlProps(AdditionalInfoRenderer);