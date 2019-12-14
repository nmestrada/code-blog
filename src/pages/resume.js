import React from 'react';
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf';
import Layout from "../components/layout"
import resumeDoc from "../Natalie_Estrada_Resume.pdf"
// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// Create Document Component
const Resume = () => (
<Layout>
    <Document
          file={resumeDoc}
        />
{/* <PDFViewer>
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  </PDFViewer> */}

</Layout>
);
//make sure you export default components with Gatsby, must look up why think it has to do with SEO
export default Resume