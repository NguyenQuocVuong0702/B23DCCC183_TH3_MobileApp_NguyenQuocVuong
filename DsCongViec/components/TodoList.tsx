import { Feather } from '@expo/vector-icons'; // Dùng icon cho nút xóa
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// Định nghĩa kiểu dữ liệu cho một công việc
interface Task {
  id: string;
  text: string;
}

export default function TodoList() {
  // State cho nội dung công việc đang nhập
  const [task, setTask] = useState('');
  // State cho danh sách công việc
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Hàm xử lý thêm công việc mới
  const handleAddTask = () => {
    // 1. Kiểm tra xem ô input có rỗng không
    if (task.trim().length === 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên công việc.');
      return;
    }

    // 2. Tạo công việc mới với ID duy nhất
    const newTask = {
      id: Date.now().toString(), // Dùng timestamp làm ID đơn giản
      text: task,
    };

    // 3. Thêm công việc mới vào đầu danh sách
    setTaskList([newTask, ...taskList]);

    // 4. Xóa nội dung trong ô input và ẩn bàn phím
    setTask('');
    Keyboard.dismiss();
  };

  // Hàm xử lý xóa công việc
  const handleDeleteTask = (id: string) => {
    Alert.alert(
      "Xác nhận xóa",
      "Bạn có chắc chắn muốn xóa công việc này không?",
      [
        {
          text: "Hủy",
          style: "cancel"
        },
        { 
          text: "Xóa", 
          onPress: () => {
            const updatedTaskList = taskList.filter(item => item.id !== id);
            setTaskList(updatedTaskList);
          },
          style: 'destructive'
        }
      ]
    );
  };

  // Hàm render cho mỗi mục trong FlatList
  const renderItem = ({ item }: { item: Task }) => (
    <TouchableOpacity 
      style={styles.taskItem} 
      onLongPress={() => handleDeleteTask(item.id)} // Xóa khi nhấn giữ
    >
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Feather name="trash-2" size={22} color="#E74C3C" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Danh sách công việc</Text>

      {/* Vùng nhập liệu */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Thêm công việc mới..."
          placeholderTextColor="#999"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách công việc */}
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listContainer}
        // Hiển thị thông báo khi danh sách trống
        ListEmptyComponent={<Text style={styles.emptyText}>Chưa có công việc nào.</Text>}
      />
    </View>
  );
}

// StyleSheet để định dạng giao diện
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#DEE2E6',
    borderWidth: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#495057',
    flex: 1, // Để chữ tự xuống dòng nếu quá dài
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#6C757D',
  },
});