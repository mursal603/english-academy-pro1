import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LeaderboardScreen = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Sarah Anderson', level: 7, xp: 2100, streak: 3 },
    { id: 2, name: 'Michael Park', level: 6, xp: 1800, streak: 5 },
  ]);

  const globalUsers = [
    { id: 1, name: 'You (Alex)', level: 8, xp: 2450, streak: 7, isUser: true },
    { id: 2, name: 'Maria Santos', level: 9, xp: 3200, streak: 14 },
    { id: 3, name: 'John Chen', level: 8, xp: 2800, streak: 21 },
    { id: 4, name: 'Emma Thompson', level: 7, xp: 2100, streak: 9 },
    { id: 5, name: 'David Brown', level: 6, xp: 1900, streak: 6 },
  ];

  const handleChallenge = (userName) => {
    Alert.alert('Challenge Sent', `You challenged ${userName}!`, [
      { text: 'OK' },
    ]);
  };

  const LeaderboardRow = ({ rank, user, isUser }) => (
    <View
      style={[styles.leaderboardRow, isUser && styles.userRow]}
    >
      <Text style={styles.rank}>{rank}</Text>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userMeta}>
          Level {user.level} • {user.streak}-day 🔥
        </Text>
      </View>
      <Text style={styles.xp}>{user.xp}XP</Text>
    </View>
  );

  const FriendCard = ({ friend }) => (
    <View style={styles.friendCard}>
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{friend.name}</Text>
        <Text style={styles.friendMeta}>
          Level {friend.level} • {friend.xp} XP
        </Text>
      </View>
      <TouchableOpacity
        style={styles.challengeBtn}
        onPress={() => handleChallenge(friend.name)}
      >
        <Text style={styles.challengeBtnText}>Challenge</Text>
      </TouchableOpacity>
    </View>
  );

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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Global Top 5</Text>
        {globalUsers.map((user, index) => (
          <LeaderboardRow
            key={user.id}
            rank={index + 1}
            user={user}
            isUser={user.isUser}
          />
        ))}

        <Text style={styles.sectionTitle}>Friend Challenges</Text>
        {friends.length > 0 ? (
          friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No friends added yet</Text>
          </View>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>How Rankings Work</Text>
          <Text style={styles.infoItem}>
            • Rank by XP points earned from activities
          </Text>
          <Text style={styles.infoItem}>
            • Leaderboard updates daily
          </Text>
          <Text style={styles.infoItem}>
            • Challenge friends for friendly competition
          </Text>
          <Text style={styles.infoItem}>
            • Maintain streak for bonus XP
          </Text>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
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
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
    marginTop: 12,
  },
  leaderboardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  userRow: {
    backgroundColor: '#E8F4FD',
    borderColor: '#A0D5F7',
    borderWidth: 2,
  },
  rank: {
    fontSize: 12,
    fontWeight: '600',
    color: '#378ADD',
    minWidth: 24,
  },
  userInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  userMeta: {
    fontSize: 10,
    color: '#888780',
  },
  xp: {
    fontSize: 12,
    fontWeight: '600',
    color: '#378ADD',
  },
  friendCard: {
    backgroundColor: '#E8F4FD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#A0D5F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  friendMeta: {
    fontSize: 10,
    color: '#888780',
  },
  challengeBtn: {
    backgroundColor: '#378ADD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  challengeBtnText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '600',
  },
  emptyState: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 12,
    color: '#888780',
  },
  infoCard: {
    backgroundColor: '#FFF5E1',
    borderRadius: 8,
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#FFE0B2',
    marginTop: 12,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  infoItem: {
    fontSize: 11,
    color: '#1A1A1A',
    marginBottom: 6,
    lineHeight: 16,
  },
  bottomPadding: {
    height: 20,
  },
});

export default LeaderboardScreen;
