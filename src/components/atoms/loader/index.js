
import React from 'react';
import {View, Image, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Loader = () =>{
		return(
			<View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
				<Image 
					source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
					style={styles.img}
				/>
                <Text style={styles.txt}>Please wait</Text>
			</View>
        )
}

const styles = {
	img: {
		height: '70%',
        width: '70%',
		justifyContent: 'center',
        alignSelf: 'center'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: wp('8%'),
        margin: wp('8%')
    }
}


export default Loader