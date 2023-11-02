import { useLocation } from 'react-router-dom'
import { Page, Text, View, Document, PDFViewer, Image } from '@react-pdf/renderer';

import rick from './rick.png'
import email from './email.png'
import satellite from './satellite.png'
import { styles } from './styles';
import data from './data.json';

export default function PdfResume() {
  const loc = useLocation()

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
  console.log(loc)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>')

  return (
    <div className="w-full h-full items-center justify-center flex bg-gradient-to-b from-affair-500 to-affair-700 ">
      <PDFViewer width="90%" height="90%">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.head}>
              <View style={styles.photoCont}>
                <Image src={rick} style={styles.photo} />
              </View>
              <View style={styles.details}>
                <Text style={styles.title}>
                  Hi! I am Rick.
                </Text> 
                <Text style={styles.subTitle}>
                  A Scientist, Inventor & Founder of the Citadel.
                </Text>
                <View style={styles.contacts}>
                  <View style={styles.contact}>
                    <Image src={email} style={styles.contactIcon} />
                    <Text style={styles.contactText}>rick@pickle.com</Text>
                  </View>
                  <View style={styles.contact}>
                    <Image src={satellite} style={styles.contactIcon} />
                    <Text style={styles.contactText}>+232-8932291232</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.restWrapper}>
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Work Experience</Text> 
                {data.workExperience.map(
                  ({ Position, Company, Duration, Responsibilities }) => (
                    <View style={styles.experience}>
                      <View style={styles.exp}>
                        <Text style={styles.position}>{Position}</Text>
                        <Text style={styles.company}>{Company} ({Duration})</Text>
                      </View>
                      <View style={styles.responsibilities}>
                        {Responsibilities.map((res) => (
                          <Text>- {res}</Text>
                        ))}
                      </View>
                    </View>
                  ))}
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Skills</Text> 
                {data.Skills.map(
                  (skill) => (
                    <View style={styles.skill}>
                      <Text>- {skill}</Text>
                    </View>
                  ))}
              </View>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.restWrapper}>
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Research Projects</Text> 
                {data.researchProjects.map(
                  ({ Title, Institution, Duration, Description }) => (
                    <View style={styles.experience}>
                      <View style={styles.exp}>
                        <Text style={styles.position}>{Title}</Text>
                        <Text style={styles.company}>{Institution} ({Duration})</Text>
                      </View>
                      <View style={styles.responsibilities}>
                        <Text>{Description}</Text>
                      </View>
                    </View>
                  ))}
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Publications</Text> 
                {data.Publications.map(
                  ({ Title, journal, Year, Description }) => (
                    <View style={styles.experience}>
                      <View style={styles.exp}>
                        <Text style={styles.position}>{Title}</Text>
                        <Text style={styles.company}>In {journal} in year {Year}</Text>
                      </View>
                      <View style={styles.responsibilities}>
                        <Text>{Description}</Text>
                      </View>
                    </View>
                  ))}
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Education</Text> 
                {data.Education.map(
                  ({ Degree, Institution, Year }) => (
                    <View style={styles.experience}>
                      <View style={styles.exp}>
                        <Text style={styles.position}>{Degree}</Text>
                        <Text style={styles.company}>{Institution} ({Year})</Text>
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}
