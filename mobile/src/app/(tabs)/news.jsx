import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FileText, Calendar, Clock, ChevronRight } from "lucide-react-native";

export default function NewsPage() {
  const insets = useSafeAreaInsets();

  const featuredNews = {
    title: "Farmers Market Returns This Wednesday",
    excerpt:
      "Join us for fresh local produce, artisan goods, and community fellowship at Smith Park.",
    date: "November 5, 2025",
    category: "Community Events",
    color: "#059669",
  };

  const newsItems = [
    {
      title: "Monsters in Smith Park",
      excerpt:
        "Annual Halloween event brings spooky fun for all ages with costume contests and treats.",
      date: "October 28, 2025",
      category: "Events",
      color: "#EA580C",
    },
    {
      title: "Spooky Shuffle 2025 Registration Open",
      excerpt:
        "Walk, jog, or run in our annual community fitness event. Register now for early bird pricing.",
      date: "October 15, 2025",
      category: "Recreation",
      color: "#7C2D12",
    },
    {
      title: "Fall Cleanup Guidelines Released",
      excerpt:
        "Village leaf pickup begins the third week of October. Learn proper bagging procedures.",
      date: "October 10, 2025",
      category: "Public Works",
      color: "#2563EB",
    },
    {
      title: "Village Board Meeting Minutes - September",
      excerpt:
        "Review decisions made during the September village board meeting including budget updates.",
      date: "September 25, 2025",
      category: "Government",
      color: "#1E3A8A",
    },
  ];

  const categories = [
    { name: "All News", count: 12, color: "#6B7280" },
    { name: "Events", count: 4, color: "#059669" },
    { name: "Government", count: 3, color: "#1E3A8A" },
    { name: "Recreation", count: 2, color: "#EA580C" },
    { name: "Public Works", count: 3, color: "#2563EB" },
  ];

  return (
    <View
      style={{ flex: 1, backgroundColor: "#F9FAFB", paddingTop: insets.top }}
    >
      <StatusBar style="dark" />

      {/* Header */}
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E7EB",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FileText size={24} color="#1E3A8A" style={{ marginRight: 12 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1E3A8A" }}>
            News
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Featured News */}
        <View
          style={{ paddingHorizontal: 20, marginTop: 20, marginBottom: 30 }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Featured Story
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  backgroundColor: featuredNews.color,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
                >
                  {featuredNews.category}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 12,
                }}
              >
                <Clock size={14} color="#9CA3AF" style={{ marginRight: 4 }} />
                <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
                  {featuredNews.date}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#111827",
                marginBottom: 8,
              }}
            >
              {featuredNews.title}
            </Text>
            <Text style={{ fontSize: 14, color: "#6B7280", lineHeight: 20 }}>
              {featuredNews.excerpt}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Categories
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -20 }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    marginRight: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 1,
                  }}
                >
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: category.color,
                      borderRadius: 6,
                      marginRight: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: "#111827",
                      marginRight: 4,
                    }}
                  >
                    {category.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
                    ({category.count})
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Recent News */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Recent News
          </Text>
          {newsItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 2,
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 60,
                  backgroundColor: item.color,
                  borderRadius: 4,
                  marginRight: 12,
                }}
              />
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      color: item.color,
                      backgroundColor: `${item.color}20`,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      borderRadius: 4,
                      marginRight: 8,
                    }}
                  >
                    {item.category}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
                    {item.date}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 14, color: "#6B7280", lineHeight: 18 }}
                >
                  {item.excerpt}
                </Text>
              </View>
              <ChevronRight
                size={16}
                color="#9CA3AF"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Newsletter Signup */}
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#1F2937",
            borderRadius: 12,
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 12,
            }}
          >
            Stay Informed
          </Text>
          <Text
            style={{
              color: "#D1D5DB",
              fontSize: 14,
              lineHeight: 20,
              marginBottom: 16,
            }}
          >
            Subscribe to our newsletter to receive the latest village news,
            event announcements, and important updates directly to your inbox.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#059669",
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Subscribe to Newsletter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#374151",
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#D1D5DB", fontWeight: "bold" }}>
              View All Archives
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
