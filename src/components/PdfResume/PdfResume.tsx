import { useLocation, useNavigate } from 'react-router-dom'
import { Page, Text, View, Document, PDFViewer, Image } from '@react-pdf/renderer';

import rick from './rick.png'
import email from './email.png'
import satellite from './satellite.png'
import { styles } from './styles';
import data from './data.json';

import type { AllUserDataT } from '../UserDetails/types'

export default function PdfResume() {
  const loc = useLocation()
  const navigate = useNavigate()

  const { state }: { state: AllUserDataT } = loc

  if (!state) {
    return <></>
  }

  const { about, experiences, educations } = state

  const handleButtonClick = () => {
    navigate('/', { state: {...state} })
  }

  return (
    <div className="w-full h-full items-center justify-center flex flex-col bg-gradient-to-b from-affair-500 to-affair-700 ">
      <button 
        onClick={handleButtonClick}
        className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white my-3 px-3 ml-auto mr-[5%]"
      >Edit Details</button>
      <PDFViewer width="90%" height="90%">
        <Document>
          <Page size="A4" style={styles.page} wrap={false}>
            <View style={styles.head}>
              <View style={styles.photoCont}>
                {/* @ts-ignore */}
                <Image src={about.image} style={styles.photo} />
              </View>
              <View style={styles.details}>
                <Text style={styles.title}>
                  Hi! I am {about.fName} {about.lName}.
                </Text> 
                <Text style={styles.subTitle}>
                  {about.about}
                </Text>
                <View style={styles.contacts}>
                  <View style={styles.contact}>
                    <Image src={email} style={styles.contactIcon} />
                    <Text style={styles.contactText}>{about.email}</Text>
                  </View>
                  <View style={styles.contact}>
                    <Image src={satellite} style={styles.contactIcon} />
                    <Text style={styles.contactText}>{about.phone}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.restWrapper}>
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Work Experience</Text> 
                {experiences.map(
                  ({ company, title, details, location, from, to }) => (
                    <View style={styles.experience}>
                      <View style={styles.exp}>
                        <Text style={styles.position}>{title}</Text>
                        <Text style={styles.company}>{company} ({from} - {to})</Text>
                      </View>
                      <View style={styles.responsibilities}>
                        {details?.split(/\n/g).map((res) => (
                          <Text>- {res}</Text>
                        ))}
                      </View>
                    </View>
                  ))}
              </View>
              {
                false && (
                  <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Skills</Text> 
                    {data.Skills.map(
                      (skill) => (
                        <View style={styles.skill}>
                          <Text>- {skill}</Text>
                        </View>
                      ))}
                  </View>
                )
              }
              {
                false && (
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
                )
              }
              {
                false && (
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
                )
              }
              <View style={styles.section}>
                <Text style={styles.sectionHeading}>Education</Text> 
                {educations.map(
                  ({ name, degree, details, grade, from, to }) => (
                    <View style={styles.experience}>
                      <View style={styles.exp}>
                        <Text style={styles.position}>{degree}</Text>
                        <Text style={styles.company}>{name} ({from} - {to})</Text>
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
