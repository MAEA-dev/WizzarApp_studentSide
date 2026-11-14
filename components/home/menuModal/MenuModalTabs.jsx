import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../../../constants/Fonts";

export default function MenuModalTabs({
  sections,
  activeSectionId,
  onTabPress,
}) {
  return (
    <View style={styles.tabsWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContent}
      >
        {sections.map((section) => {
          const isActive = section.id === activeSectionId;

          return (
            <TouchableOpacity
              key={section.id}
              activeOpacity={0.85}
              style={[styles.tabButton, isActive && styles.activeTabButton]}
              onPress={() => onTabPress(section.id)}
            >
              <Ionicons
                name={section.icon}
                size={16}
                color={isActive ? "#130B2B" : "#FFD86B"}
              />

              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {section.tabTitle || section.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsWrapper: {
    marginBottom: 12,
  },

  tabsContent: {
    gap: 8,
    paddingRight: 4,
  },

  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(44, 36, 95, 0.78)",
    borderWidth: 1.5,
    borderColor: "#7557D9",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  activeTabButton: {
    backgroundColor: "#FFD86B",
    borderColor: "#FFFFFF",
    elevation: 4,
  },

  tabText: {
    fontFamily: Fonts.bodyBold,
    fontSize: 11,
    color: "#FFD86B",
  },

  activeTabText: {
    color: "#130B2B",
  },
});