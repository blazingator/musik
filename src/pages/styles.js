import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  
})

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5 + Constants.statusBarHeight,
    alignItems: 'center',
    marginHorizontal: 10
  },

  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5
  },
  cardTitle: {
    color: '#fff'
  },
  cardAvatar: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  bgCard: {
    width: '100%',
    height: 120,
    alignSelf: 'center'
  },
  quickOptions:{
    width: '100%',
    height: 60,
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistCards: {
    flex: 1,
    // paddingHorizontal: 24,
    height: 220,
    width: '100%'
  },
  artistsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  }
})

export default styles