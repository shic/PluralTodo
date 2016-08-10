import React from 'react-native';

const {
    View,
    ListView,
    TouchableHighlight,
    Text,
    Switch,
} = React;

// import TaskRow from './TaskRow/Component';

const styles = React.StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600',
    },
});

class TaskList extends React.Component {
    constructor(props, context) {// To bind data
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.filteredTodos),
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     const dataSource = this
    //         .state
    //         .dataSource
    //         .cloneWithRows(nextProps.filteredTodos);
    //     this.setState({ dataSource });
    // }
    // renderRow(todo) {
    //     return (
    //         <TaskRow
    //             onDone={this.props.onDone}
    //             todo={todo}
    //         />
    //     );
    // }

    render() {
        return (
          <Text>Hello world!</Text>

            // <View style={styles.container}>
            //   <ListView
            //       dataSource={this.state.dataSource} // bind dataSource
            //       renderRow={this.renderRow.bind(this)} // call renderRow function and bind it
            //   />
            // </View>
        );
    }
}

TaskList.propTypes = {
    filter: React.PropTypes.string.isRequired,
    filteredTodos: React.PropTypes
        .arrayOf(React.PropTypes.object).isRequired,
    onAddStarted: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func.isRequired,
    onToggle: React.PropTypes.func.isRequired,
};

export default TaskList;
