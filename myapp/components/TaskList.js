import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../api'
import { useIsFocused } from '@react-navigation/core'

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const [refresing, setrefresing] = useState(false)

    const isFocused = useIsFocused();

    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }

    useEffect(() => {
        if(isFocused)
            loadTasks()
    }, [isFocused])

    const handleDelete = async (id) => {
        await deleteTask(id)
        await loadTasks()
    }

    const renderItem = ({ item }) => {
        return <TaskItem task={item}  handleDelete={handleDelete}/>
    }

    const onRefresh = React.useCallback(async () => {
        setrefresing(true);
        await loadTasks();
        setrefresing(false);
    })

    return (
        <FlatList
            style={{ width: "100%" }}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    colors={["#78e08f"]}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#0a3d62"
                />
            }
        />
    )
}

export default TaskList
