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

const RewardsScreen = () => {
  const [purchased, setPurchased] = useState([]);

  const rewards = [
    { id: 1, icon: '🎖️', name: 'Premium Avatar', cost: 500 },
    { id: 2, icon: '📚', name: 'Lesson Boost', cost: 300 },
    { id: 3, icon: '🏆', name: 'Platinum Badge', cost: 1000 },
    { id: 4, icon: '⭐', name: 'Streak Extender', cost: 250 },
    { id: 5, icon: '🎨', name: 'Custom Theme', cost: 400 },
    { id: 6, icon: '🚀', name: 'Speed Master', cost: 800 },
  ];

  const handlePurchase = (rewardId) => {
    if (!purchased.includes(rewardId)) {
      setPurchased([...purchased, rewardId]);
      Alert.alert('Purchase Successful', 'Reward unlocked!');
    }
  };

  const RewardCard = ({ reward }) => {
    const isOwned = purchased.includes(reward.id);

    return (
      <View style={styles.rewardCard}>
        <Text style={styles.rewardIcon}>{reward.icon}</Text>
        <Text style={styles.rewardName}>{reward.name}</Text>
        <Text style={styles.rewardCost}>{reward.cost} XP</Text>
        <TouchableOpacity
          style={[styles.rewardButton, isOwned && styles.ownedButton]}
          onPress={() => handlePurchase(reward.id)}
          disabled={isOwned}
        >
          <Text style={[styles.buttonText, isOwned && styles.ownedText]}>
            {isOwned ? 'Owned' : 'Get'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

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
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Your Balance</Text>
          <Text style={styles.balanceValue}>2,450 XP</Text>
        </View>

        <View style={styles.rewardsGrid}>
          {rewards.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>How to Earn XP?</Text>
          <Text style={styles.infoItem}>✓ Complete daily quests</Text>
          <Text style={styles.infoItem}>✓ Finish lessons</Text>
          <Text style={styles.infoItem}>✓ Maintain streak</Text>
          <Text style={styles.infoItem}>✓ Achieve milestones</Text>
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
  balanceCard: {
    backgroundColor: '#378ADD',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: 4,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  rewardCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  rewardIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  rewardName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
    textAlign: 'center',
  },
  rewardCost: {
    fontSize: 10,
    color: '#378ADD',
    marginBottom: 8,
    fontWeight: '600',
  },
  rewardButton: {
    width: '100%',
    backgroundColor: '#378ADD',
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  ownedButton: {
    backgroundColor: '#CCCCCC',
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '600',
  },
  ownedText: {
    color: '#666666',
  },
  infoCard: {
    backgroundColor: '#E8F4FD',
    borderRadius: 8,
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#A0D5F7',
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

export default RewardsScreen;
