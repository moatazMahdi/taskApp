import React, { useRef, useState, useEffect } from "react";
import { 
  View, 
  FlatList, 
  Image,
  Dimensions, 
} from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

const images = [
  require("../../assets/Images/slider1.png"),
  require("../../assets/Images/slider2.webp"),
  require("../../assets/Images/slider3.webp"),
];

const BannerSlider = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Image source={item} style={styles.image} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};



export default BannerSlider;
