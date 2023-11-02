import { StyleSheet } from '@react-pdf/renderer';
import { colors } from '../../colors'

const { white, affair } = colors
const gutter = 20

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: affair['100'],
    color: affair['100']
  },
  head: {
    backgroundColor: affair['900'],
    padding: gutter,
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  photoCont: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: affair['500'],
  },
  photo: {
    height: '100%',
    width: 'auto',
    opacity: 0.85,
  },
  details: {
    color: white,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    width: 390,
  },
  title: {
    fontSize: 20,
    width: '100%',
    color: affair['200'],
    marginTop: 10,
  },
  subTitle: {
    fontSize: 12,
    width: '100%',
    margin: '10 0 5',
    color: affair['400']
  },
  aboutMe: {
    fontSize: 12,
    width: '100%'
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10 0',
    marginTop: 'auto',
    marginBottom: 10,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactIcon: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  contactText: {
    fontSize: 12,
    color: affair['300']
  },
  restWrapper: {
    padding: gutter,
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    width: '100%',
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeading: {
    fontSize: 20,
    color: affair['900'],
    width: '100%',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  experience: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 15,
  },
  exp: {
    display: 'flex',
    flexDirection: 'column',
  },
  position: {
    color: affair['900'],
    fontSize: 16,
    marginBottom: 2,
    marginTop: 5,
  },
  company: {
    color: affair['600'],
    fontSize: 12,
  },
  duration: {
    color: affair['600'],
    fontSize: 10,
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'right',
  },
  responsibilities: {
    width: '100%',
    margin: '10px 0',
    fontSize: 11,
    color: affair['950'],
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  },
  skill: {
    width: '100%',
    margin: '8px 0',
    fontSize: 12,
    color: affair['950'],
  }
});

