import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's snow theme CSS
import {
  Container,
  CssBaseline,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const medicalConditions = [
  { name: "Asthma", isBold: true },
  { name: "Anemia", isBold: true },
  { name: "Arthritis", isBold: false },
  { name: "Bronchitis", isBold: false },
  { name: "Bipolar Disorder", isBold: true },
  { name: "Breast Cancer", isBold: false },
  { name: "Cancer", isBold: true },
  { name: "Chronic Pain", isBold: false },
  { name: "Celiac Disease", isBold: true },
  { name: "Diabetes", isBold: false },
  { name: "Depression", isBold: true },
  { name: "Dementia", isBold: false },
  { name: "Eczema", isBold: true },
  { name: "Endometriosis", isBold: false },
  { name: "Epilepsy", isBold: true },
  { name: "Fibromyalgia", isBold: false },
  { name: "Fibroids", isBold: true },
  { name: "Fungal Infection", isBold: false },
  { name: "Gastroenteritis", isBold: true },
  { name: "Glaucoma", isBold: false },
  { name: "Gout", isBold: true },
  { name: "Hypertension", isBold: false },
  { name: "Heart Disease", isBold: true },
  { name: "Hemorrhoids", isBold: false },
  { name: "Influenza", isBold: true },
  { name: "Irritable Bowel Syndrome", isBold: false },
  { name: "Insomnia", isBold: true },
  { name: "Jaundice", isBold: false },
  { name: "Juvenile Arthritis", isBold: true },
  { name: "Kidney Stones", isBold: false },
  { name: "Lupus", isBold: true },
  { name: "Lyme Disease", isBold: false },
  { name: "Leukemia", isBold: true },
  { name: "Migraine", isBold: false },
  { name: "Multiple Sclerosis", isBold: true },
  { name: "Menopause", isBold: false },
  { name: "Narcolepsy", isBold: true },
  { name: "Neuropathy", isBold: false },
  { name: "Osteoporosis", isBold: true },
  { name: "Obesity", isBold: false },
  { name: "Ovarian Cancer", isBold: true },
  { name: "OCD (Obsessive-Compulsive Disorder)", isBold: false },
  { name: "Pneumonia", isBold: true },
  { name: "Psoriasis", isBold: false },
  { name: "Pancreatitis", isBold: true },
  { name: "Quinsy", isBold: false },
  { name: "Restless Legs Syndrome", isBold: true },
  { name: "Rheumatoid Arthritis", isBold: false },
  { name: "Sinusitis", isBold: true },
  { name: "Schizophrenia", isBold: false },
  { name: "Scoliosis", isBold: true },
  { name: "Tuberculosis", isBold: false },
  { name: "Thyroid Disorders", isBold: true },
  { name: "Trigeminal Neuralgia", isBold: false },
  { name: "Ulcerative Colitis", isBold: true },
  { name: "Urinary Tract Infection", isBold: false },
  { name: "Uterine Fibroids", isBold: true },
  { name: "Varicose Veins", isBold: false },
  { name: "Vitamin Deficiency", isBold: true },
  { name: "Vertigo", isBold: false },
  { name: "Whooping Cough", isBold: true },
  { name: "Warts", isBold: false },
  { name: "Wilson's Disease", isBold: true },
  { name: "Xeroderma", isBold: false },
  { name: "Xerostomia (Dry Mouth)", isBold: true },
  { name: "X-Ray Burns", isBold: false },
  { name: "Yellow Fever", isBold: true },
  { name: "Yeast Infection", isBold: false },
  { name: "Yersinia Infection", isBold: true },
  { name: "Zika Virus", isBold: false },
  { name: "Zollinger-Ellison Syndrome", isBold: true },
  { name: "Zoster (Shingles)", isBold: false },
];

console.log(medicalConditions);

const Conditions = () => {
  let initialArray = medicalConditions;

  return (
    <>
      <h1>C1</h1>
      <h1>C1</h1>
      <div>C2</div>
      <div>C3</div>
      <div>C4</div>
      <div>C5</div>
    </>
  );
};

const App = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [htmlArray, setHtmlArray] = useState([]);

  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      // Set the default format to 'list'
      editorRef.current.getEditor().format("list", "ordered");
    }
  }, []);

  // Modules for Quill with only list option
  const modules = {
    toolbar: [[{ list: "ordered" }]],
    toolbar: false,
  };

  const changeToArray = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const listItems = doc.querySelectorAll("ol li");
    const resultArray = Array.from(listItems).map((item) =>
      item.textContent.trim()
    );
    setHtmlArray(resultArray);
    console.log(resultArray);
  };

  const formats = ["list"];

  const arrayToHtml = (array) => {
    const listItems = array.map((item) => `<li>${item}</li>`).join("\n");
    const htmlString = `<ul>\n${listItems}\n</ul>`;

    console.log(htmlString);
  };

  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: "20px" }}>
          <h1>Quill Editor with Only List Option (Activated on Load)</h1>
          <ReactQuill
            ref={editorRef}
            // theme="snow"
            value={editorHtml}
            onChange={setEditorHtml}
            modules={modules}
            formats={formats}
            readOnly={false} // Set readOnly to false to allow editing
          />
          <Stack spacing={2} direction="row" marginTop={2}>
            <Button
              variant="contained"
              onClick={() => changeToArray(editorHtml)}
            >
              Convert to Array
            </Button>
            <Button variant="outlined" onClick={() => arrayToHtml(htmlArray)}>
              Convert to html
            </Button>
          </Stack>
        </Paper>
        <Conditions />
      </Container>
    </>
  );
};

export default App;
