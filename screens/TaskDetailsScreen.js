import React, { Component } from 'react'
import { Text, View,Modal,Button,StyleSheet,TextInput } from 'react-native'

export default class TaskDetailsScreen extends Component {
	constructor(props){
		super(props);
	}
	render() {
		console.log(this.props,'props');
		const { task, onDelete, index,onBack, onSave, onEdit, editing, onHandleTaskChange, changeTaskValue} = this.props;
		return (
			<Modal animationType="slide" visible={!!task}>
				<View style={styels.container}>
					{
						editing ? 
							<TextInput style={styels.input} value={changeTaskValue} onChangeText={(txt) => {
								onHandleTaskChange(txt);
								}} />:
							<Text style={styels.text}>{task}</Text>

					}
						<View style={styels.buttons}>
							<View style={styels.btn}>
								<Button title="BACK" onPress={() => { onBack() }} />
							</View>
							{
								editing ? 
								<View style={styels.btn}>
									<Button title="SAVE" onPress={() => { onSave(index,changeTaskValue) }} />
								</View>:
								<View style={styels.btn}>
									<Button title="EDIT" onPress={() => { onEdit(task) }} />
								</View>
							}
							<View style={styels.btn}>
								<Button title="DELETE" onPress={() => onDelete(task)} color="red" />
							</View>
						</View>
				</View>
			</Modal>
		)
	}
}

const styels=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	text:{
		color:"#3d3d3d",
		fontSize:36
	},
	buttons:{
		flexDirection:'row',
		marginTop:20,
	},
	btn:{
		marginHorizontal:10
	},
	input:{
		paddingHorizontal: 30,
		borderColor: '#cccccc',
		borderWidth: 1,
		borderRadius: 3,
		color: "#3d3d3d",
		fontSize: 36
	}
	// textInput:{
	// 	borderWidth:1,
	// 	borderColor:'#333',
	// 	width:120,
	// 	padding:5
	// }
});