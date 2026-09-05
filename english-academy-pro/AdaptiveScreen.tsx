import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const AdaptiveScreen = () => {
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
        <Text style={styles.sectionTitle}>Smart Learning</Text>

        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Learning Pace</Text>
            <Text style={styles.settingValue}>Advanced</Text>
          </View>
          <Text style={styles.settingDesc}>
            94% performance - increasing difficulty to maintain challenge
          </Text>
        </View>

        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Best Study Time</Text>
            <Text style={styles.settingValue}>7-9 PM</Text>
          </View>
          <Text style={styles.settingDesc}>
            89% effectiveness at this time - AI will send reminders
          </Text>
        </View>

        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Session Length</Text>
            <Text style={styles.settingValue}>45-60m</Text>
          </View>
          <Text style={styles.settingDesc}>
            Optimal for retention & focus based on your learning patterns
          </Text>
        </View>

        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Study Frequency</Text>
            <Text style={styles.settingValue}>5 days/week</Text>
          </View>
          <Text style={styles.settingDesc}>
            Recommended balance between learning and rest days
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Focus Areas</Text>

        <View style={styles.focusCard}>
          <View style={styles.focusHeader}>
            <Text style={styles.focusTitle}>Phrasal Verbs</Text>
            <Text style={styles.focusPercent}>72%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '72%' }]} />
          </View>
          <Text style={styles.focusDesc}>Mastery level: Keep practicing</Text>
        </View>

        <View style={styles.focusCard}>
          <View style={styles.focusHeader}>
            <Text style={styles.focusTitle}>Speaking Fluency</Text>
            <Text style={styles.focusPercent}>68%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '68%' }]} />
          </View>
          <Text style={styles.focusDesc}>Needs focus - Next lesson recommended</Text>
        </View>

        <View style={styles.focusCard}>
          <View style={styles.focusHeader}>
            <Text style={styles.focusTitle}>Business Vocabulary</Text>
            <Text style={styles.focusPercent}>45%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '45%' }]} />
          </View>
          <Text style={styles.focusDesc}>High priority - Advanced level material</Text>
        </View>

        <Text style={styles.sectionTitle}>Recommendations</Text>

        <View style={styles.recommendCard}>
          <Text style={styles.recommendTitle}>Next Lesson</Text>
          <Text style={styles.recommendContent}>Advanced Conditionals</Text>
          <Text style={styles.recommendDesc}>
            Master this topic to strengthen your weak areas in complex sentence structures
          </Text>
          <View style={styles.xpBadge}>
            <Text style={styles.xpText}>+50 XP</Text>
          </View>
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
  settingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  settingLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  settingValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#378ADD',
  },
  settingDesc: {
    fontSize: 11,
    color: '#888780',
    lineHeight: 16,
  },
  focusCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  focusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  focusTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  focusPercent: {
    fontSize: 12,
    fontWeight: '600',
    color: '#378ADD',
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#378ADD',
  },
  focusDesc: {
    fontSize: 11,
    color: '#888780',
  },
  recommendCard: {
    backgroundColor: '#E8F4FD',
    borderRadius: 8,
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#A0D5F7',
    marginBottom: 16,
  },
  recommendTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  recommendContent: {
    fontSize: 13,
    fontWeight: '600',
    color: '#378ADD',
    marginBottom: 6,
  },
  recommendDesc: {
    fontSize: 11,
    color: '#1A1A1A',
    lineHeight: 16,
    marginBottom: 10,
  },
  xpBadge: {
    backgroundColor: '#378ADD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  xpText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '600',
  },
  bottomPadding: {
    height: 20,
  },
});

export default AdaptiveScreen;
