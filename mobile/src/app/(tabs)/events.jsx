import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Calendar, Clock, MapPin, Users } from "lucide-react-native";

export default function EventsPage() {
  const insets = useSafeAreaInsets();

  const upcomingEvents = [
    {
      title: "Village Hall Closed",
      subtitle: "Veterans Day",
      date: "November 11",
      time: "8:00 am - 5:00 pm",
      location: "Village Hall",
      color: "#DC2626",
    },
    {
      title: "Veterans Day Ceremony",
      subtitle: "Historical Committee Meeting",
      date: "November 11",
      time: "11:00 am",
      location: "Village Square",
      color: "#059669",
    },
    {
      title: "Farmers Market",
      subtitle: "Weekly Community Market",
      date: "Every Wednesday",
      time: "9:00 am - 3:00 pm",
      location: "Smith Park",
      color: "#2563EB",
    },
    {
      title: "Monsters in Smith Park",
      subtitle: "Halloween Event",
      date: "October 31",
      time: "5:00 pm - 8:00 pm",
      location: "Smith Park",
      color: "#EA580C",
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
          <Calendar size={24} color="#1E3A8A" style={{ marginRight: 12 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1E3A8A" }}>
            Events
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Upcoming Events */}
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
            Upcoming Events
          </Text>
          {upcomingEvents.map((event, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: 16,
                marginBottom: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 2,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <View
                  style={{
                    width: 8,
                    height: 60,
                    backgroundColor: event.color,
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
                    {event.title}
                  </Text>
                  <Text
                    style={{ fontSize: 14, color: "#6B7280", marginBottom: 12 }}
                  >
                    {event.subtitle}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <Calendar
                      size={16}
                      color="#9CA3AF"
                      style={{ marginRight: 8 }}
                    />
                    <Text style={{ fontSize: 13, color: "#6B7280" }}>
                      {event.date}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <Clock
                      size={16}
                      color="#9CA3AF"
                      style={{ marginRight: 8 }}
                    />
                    <Text style={{ fontSize: 13, color: "#6B7280" }}>
                      {event.time}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MapPin
                      size={16}
                      color="#9CA3AF"
                      style={{ marginRight: 8 }}
                    />
                    <Text style={{ fontSize: 13, color: "#6B7280" }}>
                      {event.location}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Event Categories */}
        <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Event Categories
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                backgroundColor: "#059669",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Users size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 8,
                }}
              >
                Community
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "48%",
                backgroundColor: "#2563EB",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Calendar size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 8,
                }}
              >
                Meetings
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "48%",
                backgroundColor: "#DC2626",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <MapPin size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 8,
                }}
              >
                Festivals
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "48%",
                backgroundColor: "#7C2D12",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Clock size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 8,
                }}
              >
                Seasonal
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add to Calendar */}
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
            Stay Updated
          </Text>
          <Text style={{ color: "#D1D5DB", fontSize: 14, marginBottom: 16 }}>
            Never miss a community event. Add our calendar to your phone to get
            automatic reminders.
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
              Subscribe to Calendar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
