const primaryColor = '#9C3687';
const secondaryColor = '#A19BA0';
const darkerPrimaryColor = '#361C31';
const textColor = '#515c6f';

const buttonStyles = {
    height: 59,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
}

const AppDefaultStyles = {
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    darkerPrimaryColor,
    textColor: textColor,
    container: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    heading: {
        color: primaryColor,
        fontSize: 26,
        marginTop: 30,
        marginBottom: 30,
    },
    input: {
        color: primaryColor,
        borderColor: primaryColor,
        width: 340,
        height: 59,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: '#FFF'
    },
    primaryButton: {
        ...buttonStyles,
        backgroundColor: primaryColor
    },
    secondaryButton: {
        ...buttonStyles,
        backgroundColor: secondaryColor
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    },
    profilePicture: {
        width: 115,
        height: 115,
        borderRadius: 100,
        marginRight: 25
    }
}

export default AppDefaultStyles;