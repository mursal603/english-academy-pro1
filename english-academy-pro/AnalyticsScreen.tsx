import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const AnalyticsScreen = () => {
  const skillData = [
    { name: 'Grammar', percentage: 85 },
    { name: 'Speaking', percentage: 78 },
    { name: 'Listening', percentage: 82 },
    { name: 'Writing', percentage: 75 },
    { name: 'Vocabulary', percentage: 89 },
  ];

  const MetricBox = ({ label, value }) => (
    <View style={styles.metricBox}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );

  const SkillBar = ({ name, percentage }) => (
    <View style={styles.skillItem}>
      <View style={styles.skillLabelRow}>
        <Text style={styles.skillName}>{name}</Text>
        <Text style={styles.skillPercent}>{percentage}%</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${percentage}%` }]} />
      </View>
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
        <Text style={styles.sectionTitle}>Your Stats</Text>

        <View style={styles.metricsGrid}>
          <MetricBox label="Study time" value="47h" />
          <MetricBox label="Lessons done" value="234" />
          <MetricBox label="Accuracy" value="89%" />
          <MetricBox label="Days active" value="45" />
        </View>

        <Text style={styles.sectionTitle}>Skill Levels</Text>
        <View style={styles.skillsCard}>
          {skillData.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Weekly Activity</Text>
        <View style={styles.chartCard}>
          <View style={styles.barChart}>
            <View style={[styles.bar, { height: '45%' }]}>
              <Text style={styles.barLabel}>Mon</Text>
            </View>
            <View style={[styles.bar, { height: '60%' }]}>
              <Text style={styles.barLabel}>Tue</Text>
            </View>
            <View style={[styles.bar, { height: '30%' }]}>
              <Text style={styles.barLabel}>Wed</Text>
            </View>
            <View style={[styles.bar, { height: '80%' }]}>
              <Text style={styles.barLabel}>Thu</Text>
            </View>
            <View style={[styles.bar, { height: '70%' }]}>
              <Text style={styles.barLabel}>Fri</Text>
            </View>
            <View style={[styles.bar, { height: '95%' }]}>
              <Text style={styles.barLabel}>Sat</Text>
            </View>
            <View style={[styles.bar, { height: '100%' }]}>
              <Text style={styles.barLabel}>Sun</Text>
            </View>
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
    marginBottom: 12,
    marginTop: 8,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  metricBox: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#378ADD',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 11,
    color: '#888780',
  },
  skillsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  skillItem: {
    marginBottom: 14,
  },
  skillLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  skillPercent: {
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
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#378ADD',
  },
  chartCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    minHeight: 180,
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 140,
  },
  bar: {
    width: '12%',
    backgroundColor: '#378ADD',
    borderRadius: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 4,
  },
  barLabel: {
    fontSize: 9,
    color: '#ffffff',
    fontWeight: '600',
  },
  bottomPadding: {
    height: 20,
  },
});

export default AnalyticsScreen;
