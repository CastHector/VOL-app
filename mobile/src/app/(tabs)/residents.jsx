import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Users,
  Home,
  Truck,
  Droplets,
  Car,
  Shield,
  ChevronRight,
} from "lucide-react-native";

export default function ResidentsPage() {
  const insets = useSafeAreaInsets();

  const services = [
    {
      title: "Trash & Recycling",
      description: "Collection schedules and guidelines",
      icon: Truck,
      color: "#059669",
    },
    {
      title: "Water & Sewer",
      description: "Utility services and billing",
      icon: Droplets,
      color: "#2563EB",
    },
    {
      title: "Vehicle Stickers",
      description: "Annual vehicle registration",
      icon: Car,
      color: "#DC2626",
    },
    {
      title: "Public Safety",
      description: "Police and emergency services",
      icon: Shield,
      color: "#7C2D12",
    },
  ];

  const quickLinks = [
    "Property Tax Information",
    "Building Permits",
    "Snow Removal Guidelines",
    "Pet Licenses",
    "Library Services",
    "Parks & Recreation",
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
          <Users size={24} color="#1E3A8A" style={{ marginRight: 12 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1E3A8A" }}>
            Residents
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Message */}
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#1E3A8A",
            borderRadius: 12,
            padding: 20,
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            Welcome Home, Lyons Residents
          </Text>
          <Text style={{ color: "#D1D5DB", fontSize: 14, lineHeight: 20 }}>
            Your community services and resources are just a tap away. We're
            here to make life in Lyons easier for you and your family.
          </Text>
        </View>

        {/* Essential Services */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Essential Services
          </Text>
          {services.map((service, index) => (
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
                  width: 48,
                  height: 48,
                  backgroundColor: service.color,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 16,
                }}
              >
                <service.icon size={24} color="white" />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: 4,
                  }}
                >
                  {service.title}
                </Text>
                <Text style={{ fontSize: 14, color: "#6B7280" }}>
                  {service.description}
                </Text>
              </View>
              <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Links */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Quick Links
          </Text>
          <View
            style={{ backgroundColor: "white", borderRadius: 12, padding: 16 }}
          >
            {quickLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: index < quickLinks.length - 1 ? 1 : 0,
                  borderBottomColor: "#F3F4F6",
                }}
              >
                <Text style={{ fontSize: 14, color: "#1E3A8A", flex: 1 }}>
                  {link}
                </Text>
                <ChevronRight size={16} color="#9CA3AF" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Emergency Info */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Emergency Information
          </Text>
          <View
            style={{
              backgroundColor: "#DC2626",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              Emergency: 911
            </Text>
            <Text style={{ color: "#FEE2E2", fontSize: 14, marginBottom: 12 }}>
              For immediate police, fire, or medical emergencies
            </Text>

            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#FCA5A5",
                paddingTop: 12,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                Non-Emergency: (708) 442-4554
              </Text>
              <Text style={{ color: "#FEE2E2", fontSize: 12 }}>
                Village Hall • Mon-Thu 8am-5pm, Wed 8am-7pm
              </Text>
            </View>
          </View>
        </View>

        {/* Community Resources */}
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
            Community Resources
          </Text>
          <Text
            style={{
              color: "#D1D5DB",
              fontSize: 14,
              lineHeight: 20,
              marginBottom: 16,
            }}
          >
            Access local resources including the library, community center,
            parks, and recreational facilities.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#059669",
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Explore Resources
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
