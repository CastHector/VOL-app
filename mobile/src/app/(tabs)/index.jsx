import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Building,
  Users,
  Briefcase,
  Calendar,
  User,
  Bell,
  Phone,
  Mail,
} from "lucide-react-native";

export default function HomePage() {
  const insets = useSafeAreaInsets();

  const quickActions = [
    { title: "Government", icon: Building, color: "#1E3A8A" },
    { title: "Residents", icon: Users, color: "#1E40AF" },
    { title: "Business", icon: Briefcase, color: "#2563EB" },
    { title: "Events", icon: Calendar, color: "#3B82F6" },
  ];

  const newsItems = [
    {
      title: "Farmers Market",
      description: "Fresh local produce every Wednesday",
      color: "#059669",
    },
    {
      title: "Monsters in Smith Park",
      description: "Annual Halloween event returns",
      color: "#DC2626",
    },
    {
      title: "Spooky Shuffle 2025",
      description: "Walk, jog, run community event",
      color: "#7C2D12",
    },
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#1E3A8A",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                VL
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#1E3A8A" }}
              >
                VILLAGE OF
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#1E3A8A" }}
              >
                LYONS
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Bell size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View
          style={{
            backgroundColor: "#1E3A8A",
            paddingHorizontal: 20,
            paddingVertical: 40,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            WELCOME TO THE
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            VILLAGE OF LYONS
          </Text>
          <Text style={{ color: "white", fontSize: 16, opacity: 0.9 }}>
            Gateway to the West
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Quick Access
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "48%",
                  backgroundColor: action.color,
                  padding: 20,
                  borderRadius: 12,
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <action.icon size={32} color="white" />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginTop: 8,
                  }}
                >
                  {action.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Emergency Actions */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#059669",
                paddingVertical: 16,
                borderRadius: 8,
                alignItems: "center",
                marginRight: 8,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Phone size={20} color="white" style={{ marginRight: 8 }} />
              <Text style={{ color: "white", fontWeight: "bold" }}>
                CONTACT US
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#DC2626",
                paddingVertical: 16,
                borderRadius: 8,
                alignItems: "center",
                marginLeft: 8,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Mail size={20} color="white" style={{ marginRight: 8 }} />
              <Text style={{ color: "white", fontWeight: "bold" }}>
                REPORT CONCERN
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mayor's Message */}
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#1F2937",
            borderRadius: 12,
            padding: 20,
            marginBottom: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#374151",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
              }}
            >
              <User size={28} color="white" />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#10B981",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 8,
                }}
              >
                MESSAGE FROM THE MAYOR
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontStyle: "italic",
                  marginBottom: 8,
                }}
              >
                "Resident Driven, Business Friendly, Moving Lyons Forward."
              </Text>
              <Text style={{ color: "#D1D5DB", fontSize: 12, lineHeight: 18 }}>
                Welcome to our community app. Find important information about
                village services, events, and ways to get involved.
              </Text>
            </View>
          </View>
        </View>

        {/* Community News */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Community News
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
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 8,
                    height: 40,
                    backgroundColor: item.color,
                    borderRadius: 4,
                    marginRight: 12,
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#111827",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#6B7280" }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Upcoming Events
          </Text>
          <View
            style={{ backgroundColor: "white", borderRadius: 12, padding: 16 }}
          >
            <View style={{ marginBottom: 16 }}>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#111827" }}
              >
                VILLAGE HALL CLOSED
              </Text>
              <Text style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>
                VETERANS DAY
              </Text>
              <Text style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>
                November 11 @ 8:00 am - 5:00 pm
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#111827" }}
              >
                VETERANS DAY CEREMONY
              </Text>
              <Text style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>
                HISTORICAL COMMITTEE MEETING
              </Text>
              <Text style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>
                November 11 @ 11:00 am
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Info */}
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
            Get in Touch
          </Text>
          <Text style={{ color: "#D1D5DB", fontSize: 14, lineHeight: 20 }}>
            7750 W. Wilson Avenue{"\n"}
            Lyons, IL 60534{"\n"}
            (708) 442-4554
          </Text>
          <Text style={{ color: "#D1D5DB", fontSize: 12, marginTop: 12 }}>
            Office Hours: Mon-Thu 8am-5pm, Wed 8am-7pm
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
