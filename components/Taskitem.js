import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const Taskitem = ({task, onTouchTask,index}) => {
	return (
		<TouchableOpacity onPress={() => onTouchTask(task, index)} >
			<View style={styles.li}>
				<Text style={styles.text}>{task}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	li:{
		borderColor: '#cccccc',
		borderBottomWidth:1,
		// borderWidth: 1,
		// borderLeftWidth:0,
		// borderRightWidth:0,
		color:'black',
		padding:10,
		marginTop:5,
		marginBottom: 5,
	},
	text:{
		fontSize:18,
		color: "#3d3d3d",
	}

});

export default Taskitem;

