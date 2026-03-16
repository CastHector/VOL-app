import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Building,
  Users,
  FileText,
  Link,
  ChevronRight,
} from "lucide-react-native";

export default function GovernmentPage() {
  const insets = useSafeAreaInsets();

  const governmentLinks = [
    {
      title: "Elected Officials",
      description: "Meet your local representatives",
    },
    {
      title: "Boards & Commissions",
      description: "Community oversight groups",
    },
    {
      title: "Services & Regulations",
      description: "Village services and rules",
    },
    { title: "Village Code", description: "Local ordinances and laws" },
    { title: "Government Links", description: "Additional resources" },
  ];

  const paymentOptions = [
    {
      title: "Water Bill",
      description: "Pay your monthly water bill",
      color: "#2563EB",
    },
    {
      title: "Parking Ticket",
      description: "Village ordinance violations",
      color: "#DC2626",
    },
    {
      title: "Vehicle Sticker",
      description: "Annual vehicle registration",
      color: "#059669",
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Building size={24} color="#1E3A8A" style={{ marginRight: 12 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1E3A8A" }}>
            Government
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Government Services */}
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
            Government Services
          </Text>
          {governmentLinks.map((item, index) => (
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
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
              <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Pay Bills Section */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Pay Bills Online
          </Text>
          {paymentOptions.map((item, index) => (
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
                alignItems: "center",
              }}
            >
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
              <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Files & Forms */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Files & Forms
          </Text>
          <View
            style={{ backgroundColor: "white", borderRadius: 12, padding: 16 }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <FileText size={20} color="#1E3A8A" style={{ marginRight: 12 }} />
              <Text style={{ fontSize: 14, color: "#1E3A8A", flex: 1 }}>
                Schedule of Meetings
              </Text>
              <ChevronRight size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <FileText size={20} color="#1E3A8A" style={{ marginRight: 12 }} />
              <Text style={{ fontSize: 14, color: "#1E3A8A", flex: 1 }}>
                Meeting Agendas
              </Text>
              <ChevronRight size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <FileText size={20} color="#1E3A8A" style={{ marginRight: 12 }} />
              <Text style={{ fontSize: 14, color: "#1E3A8A", flex: 1 }}>
                Meeting Minutes
              </Text>
              <ChevronRight size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Information */}
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
            Village Hall
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
