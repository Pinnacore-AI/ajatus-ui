import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    {
      role: 'assistant',
      content: 'Tervetuloa Ajatuskumppaniin! Olen suomalainen avoimen lähdekoodin tekoäly. Kuinka voin auttaa?',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: 'user', content: message };
    setChat([...chat, userMessage]);
    setMessage('');
    setLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: 'Tämä on demo-vastaus. Yhdistä minut oikeaan AI-palvelimeen käyttääksesi täyttä toiminnallisuutta.',
      };
      setChat((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A5F6F" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ajatuskumppani</Text>
        <Text style={styles.headerSubtitle}>Suomalainen Avoin Tekoäly</Text>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
        {chat.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.role === 'user' ? styles.userBubble : styles.aiBubble,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                msg.role === 'user' ? styles.userText : styles.aiText,
              ]}
            >
              {msg.content}
            </Text>
          </View>
        ))}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#6B8FA3" />
            <Text style={styles.loadingText}>Ajattelee...</Text>
          </View>
        )}
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Kirjoita viestisi..."
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
          onPress={sendMessage}
          disabled={!message.trim() || loading}
        >
          <Text style={styles.sendButtonText}>Lähetä</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Built in Finland 🇫🇮 • Open Source</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#6B8FA3',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4A5F6F',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E8EAED',
    marginTop: 4,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#6B8FA3',
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#FFFFFF',
  },
  aiText: {
    color: '#333333',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 12,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 100,
    marginRight: 12,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#6B8FA3',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#CCC',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});

