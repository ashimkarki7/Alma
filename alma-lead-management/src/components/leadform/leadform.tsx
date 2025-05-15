"use client";
import { FC, useState, MouseEvent } from "react";
import styles from "@component/leadform/Leadform.module.css";
import Button from "@/components/button";
import { JsonForms } from "@jsonforms/react";
import { leadFormSchema, leadFormUISchema } from "@/schemas/leadForm.schema";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import {IObjectLiteral} from '@/types/type';
import Image from 'next/image';

interface LeadFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  linkedin?: string;
  visaInterest?: string[];
  resume?: string;
  additionalInfo?: string;
}

interface LeadFormProps {
  leadData?: IObjectLiteral;
  users?: IObjectLiteral;
  leadDataLoading?: boolean;
  submitForm: (formData: IObjectLiteral) => Promise<IObjectLiteral>;
}
const LeadForm: FC<LeadFormProps> = (props) => {
  const { submitForm } = props;
  const [formData, setFormData] = useState<LeadFormData>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    evt?: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    submitForm(formData)?.then((res: any) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        setFormData({});
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    });
  };

  return (
    <section className={styles.formContainer}>
      <div className={styles.introSection}>
        <Image
          src="/images/lead-form-icon.png"
          alt="Lead Form Icon"
          className={styles.icon}
          width={100}  height={100}
        />
        <h2 className={styles.heading}>
          {submitted ? `Thank You` : `Want to understand your visa options?`}
        </h2>
        <p
          className={`${styles.description} ${submitted ? styles.successDescription : ""}`}
        >
          {submitted
            ? `Your Information was submitted to our team of immigration
        attorneys. Expect an email from hello@tryalma.ai`
            : `Submit the form below and our team of experienced attorneys will review your
        information and send a preliminary assessment of your case.`}
        </p>
      </div>

      {!submitted ? (
        <div className={styles.formWrapper}>
          <JsonForms
            schema={leadFormSchema}
            uischema={leadFormUISchema}
            data={formData}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data }) => setFormData(data)}
          />
          <div className={styles.submitWrapper}>
            <Button
              title="Submit"
              onClickHandler={(evt: MouseEvent<HTMLButtonElement>) =>
                handleSubmit(evt)
              }
            />
          </div>
        </div>
      ) : (
        <div className={styles.successMessage}>
          <Button
            title="Go Back to Homepage."
            onClickHandler={(evt: MouseEvent<HTMLButtonElement>) =>
              setSubmitted(false)
            }
          />
        </div>
      )}
    </section>
  );
};

export default LeadForm;
