import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Platform,
} from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: 'Hello! I\'m your English tutor. What would you like to practice today?',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const aiResponses = [
    'That\'s great! Your pronunciation is excellent.',
    'I love your enthusiasm. Let me give you some tips on grammar.',
    'Perfect! You\'re making great progress. Want to try a harder topic?',
    'Good attempt! Remember the difference between present perfect and past simple.',
    'Wonderful! Your fluency has improved significantly.',
    'Excellent work! Your vocabulary usage is spot on.',
    'Great! Let\'s continue with the next topic.',
  ];

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    Keyboard.dismiss();

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: 'ai',
          text: randomResponse,
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Academy Pro</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2.4K</Text>
            <Text style={styles.statLabel}>XP</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Lvl</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>🔥7</Text>
            <Text style={styles.statLabel}>Streak</Text>
          </View>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>Real-time speaking practice with personalized feedback</Text>
        </View>

        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageRow,
              message.type === 'user' && styles.userMessageRow,
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                message.type === 'user' && styles.userBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.type === 'user' && styles.userText,
                ]}
              >
                {message.text}
              </Text>
            </View>
          </View>
        ))}

        {isLoading && (
          <View style={styles.messageRow}>
            <View style={styles.messageBubble}>
              <Text style={styles.typingDot}>●●●</Text>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.feedbackCard}>
        <Text style={styles.feedbackLabel}>Feedback:</Text>
        <Text style={styles.feedbackText}>
          Accuracy: 95% | Fluency: 87% | Confidence: 92%
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your response..."
          placeholderTextColor="#A0A0A0"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxHeight={100}
        />
        <TouchableOpacity
          style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
          onPress={sendMessage}
          disabled={!inputText.trim()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questsSection}>
        <Text style={styles.sectionTitle}>Daily Quests</Text>

        <View style={styles.questCard}>
          <View style={styles.questHeader}>
            <Text style={styles.questTitle}>Vocabulary Builder</Text>
            <View style={styles.xpBadge}>
              <Text style={styles.xpText}>50 XP</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '70%' }]} />
          </View>
          <Text style={styles.questProgress}>7/10 words</Text>
          <TouchableOpacity style={styles.questButton}>
            <Text style={styles.questButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.questCard}>
          <View style={styles.questHeader}>
            <Text style={styles.questTitle}>Grammar Sprint</Text>
            <View style={styles.xpBadge}>
              <Text style={styles.xpText}>75 XP</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
          <Text style={styles.questProgress}>3/5 exercises</Text>
          <TouchableOpacity style={styles.questButton}>
            <Text style={styles.questButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stat: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  statNumber: {
    fontSize: 12,
    fontWeight: '600',
    color: '#378ADD',
  },
  statLabel: {
    fontSize: 10,
    color: '#888780',
    marginTop: 2,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  infoCard: {
    backgroundColor: '#E8F4FD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: '#A0D5F7',
  },
  infoText: {
    fontSize: 12,
    color: '#1A1A1A',
    lineHeight: 16,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  userMessageRow: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  userBubble: {
    backgroundColor: '#378ADD',
    borderColor: '#378ADD',
  },
  messageText: {
    fontSize: 13,
    color: '#1A1A1A',
    lineHeight: 18,
  },
  userText: {
    color: '#ffffff',
  },
  typingDot: {
    fontSize: 16,
    color: '#888780',
    letterSpacing: 2,
  },
  feedbackCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 12,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  feedbackLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  feedbackText: {
    fontSize: 11,
    color: '#888780',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 12,
    color: '#1A1A1A',
  },
  sendButton: {
    backgroundColor: '#378ADD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  questsSection: {
    paddingHorizontal: 12,
    paddingBottom: 20,
    maxHeight: 320,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  questCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  xpBadge: {
    backgroundColor: '#378ADD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  xpText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '600',
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#378ADD',
  },
  questProgress: {
    fontSize: 11,
    color: '#888780',
    marginBottom: 8,
  },
  questButton: {
    backgroundColor: '#378ADD',
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  questButtonText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default ChatScreen;
