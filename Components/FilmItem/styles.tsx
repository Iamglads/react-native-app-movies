// FilmItem styles

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin:5
    },

    header_container: {
        flex: 3,
        flexDirection: 'row'
    },

    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },

    vote_text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      date_text: {
          textAlign: 'right',
          fontSize: 14
      }
})


export default styles