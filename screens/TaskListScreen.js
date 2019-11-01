import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,Button } from 'react-native'
import Taskitem from '../components/Taskitem';
import TaskDetailsScreen from './TaskDetailsScreen';

export default class TaskListScreen extends Component {

	constructor(props){
		super(props);
		this.state={
			tasks:[
				"Workout",
				"Reading a book",
				"Developing",
				"Editing photography",
				"Take a nap",
			],
			inputValue:'',
			chosenTask:null,
			index:null,
			editing:false,
			changeTaskValue:''
		};
	}

	onAddTask = () => {
		const {inputValue} = this.state;
		if(!inputValue) return;
		this.setState({
			tasks:[...this.state.tasks,inputValue],
			inputValue:''
		});
	}

	onTouchTask = (task,key) => {
		this.setState({
			chosenTask:task,
			index:key
		});
	}

	onDelete = (task) =>{
		const {tasks} = this.state;
		this.setState({
			tasks:tasks.filter(t => t !==task ),
			chosenTask: null
		});
	}

	onBack = () => {
		this.setState({
			chosenTask:null
		});
	}

	onEdit = (task) =>{
		this.setState({
			editing:true,
			changeTaskValue:task
		});
	}

	onSave = (index,value) => {
		const newtasks = [...this.state.tasks];
		newtasks[index]=value;
		this.setState({
			editing:false,
			tasks:newtasks,
			chosenTask:value
		});	
	}

	onHandleTaskChange = (value) => {
		this.setState({changeTaskValue:value});
	}

	render() {
		const { tasks, inputValue, chosenTask, index, editing, changeTaskValue} = this.state;
		return (
			<View style={styles.screen}>
				<Text style={styles.title}>TO-DO LIST</Text>
				<View style={styles.tasksContainer}>{tasks.map((task,index) => (
					<Taskitem key={index} task={task} onTouchTask={this.onTouchTask} index={index} />
					))}
				</View>
				<View style={styles.inputArea}>
					<TextInput style={styles.input} placeholder="New Task" value={inputValue} onChangeText={ text =>{
						this.setState({ inputValue:text});
					}}/>
					<Button title="ADD" onPress={this.onAddTask} />
				</View>
				<TaskDetailsScreen 
					task={chosenTask}
					index={index}
					editing={editing}
					onDelete={this.onDelete}	
					onBack={this.onBack}
					onEdit={this.onEdit}
					onSave={this.onSave}
					onHandleTaskChange={this.onHandleTaskChange}
					changeTaskValue={changeTaskValue}
				>

				</TaskDetailsScreen>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title:{
		fontSize:36,
		color: "#3d3d3d",
		textAlign:'center'
	},
	screen:{
		flex:1,
		paddingHorizontal: 20,
		paddingTop:70,
		paddingBottom:70
	},
	inputArea:{
		flexDirection:'row',
		marginTop:30
	},
	input:{
		paddingHorizontal:10,
		flex:1,
		borderColor:'#cccccc',
		borderWidth:1,
		borderRadius:3
	},
	tasksContainer:{
		flex:1,
		marginTop: 30
		// borderColor: '#cccccc',
		// borderWidth: 1,
	}
});
