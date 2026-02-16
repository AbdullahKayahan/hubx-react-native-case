import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, ListRenderItem, Alert } from 'react-native';

import Text from '@components/Text/Text';
import LoadingContainer from './components/LoadingContainer';
import SearchHeader from './components/SearchHeader';
import HomeQuestionCard from './components/QuestionCard';
import HomeCategoryCard from './components/CategoryCard';
import PlusBanner from './components/PlusBanner';
import { getQuestions, QuestionDto } from '@/api/getQuestions';
import { CategoryDto, getCategories } from '@/api/getCategories';
import { WHITE_98 } from '@/theme/colors';

const LOADING_DELAY = 1000;

const HomeTabScreen: React.FC = () => {
    const [questions, setQuestions] = useState<QuestionDto[]>();
    const [categories, setCategories] = useState<CategoryDto[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchQuestions = async () => {
            const res = await getQuestions();
            if (isMounted) {
                if (res.isSuccess && res.data) {
                    setQuestions(res.data);
                } else if (!res.isSuccess && res.error) {
                    Alert.alert('Error', res.error);
                }
            }
        };

        const fetchCategories = async () => {
            const res = await getCategories();
            if (isMounted) {
                if (res.isSuccess && res.data) {
                    setCategories(res.data);
                } else if (!res.isSuccess && res.error) {
                    Alert.alert('Error', res.error);
                }
            }
        };

        Promise.all([fetchQuestions(), fetchCategories()]).finally(() => {
            if (isMounted) {
                setTimeout(() => {
                    if (isMounted) {
                        setLoading(false);
                    }
                }, LOADING_DELAY);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const renderItem: ListRenderItem<CategoryDto> | null | undefined = ({ item }) => (
        <HomeCategoryCard title={item.title} image={item.image.url} />
    );

    const renderGetStartedSection = () => (
        <>
            <Text variant="primaryMedium" fontSize={15} style={styles.questionsTitleText}>
                Get Started
            </Text>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.questionsContentContainer}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {questions?.map((question) => (
                    <HomeQuestionCard
                        key={question.id}
                        title={question.title}
                        image={question.image_uri}
                        blogUrl={question.uri}
                    />
                ))}
            </ScrollView>
        </>
    );

    const renderCategoriesSection = () => (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            style={styles.contentContainer}
            columnWrapperStyle={styles.categoriesColumnContainer}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
        />
    );

    const renderLoading = () => loading && <LoadingContainer style={styles.loadingOverlay} />;

    return (
        <View style={styles.container}>
            <SearchHeader />
            <PlusBanner style={styles.plusBanner} />
            <ScrollView>
                {renderGetStartedSection()}
                {renderCategoriesSection()}
            </ScrollView>
            {renderLoading()}
        </View>
    );
};
export default HomeTabScreen;

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE_98,
    },
    scrollContainer: {
        marginTop: 16,
    },
    questionsContentContainer: {
        paddingLeft: 24,
        paddingRight: 24,
        columnGap: 10,
    },
    questionsTitleText: {
        letterSpacing: -0.24,
        lineHeight: 20,
        marginTop: 24,
        marginLeft: 24,
    },
    contentContainer: {
        marginHorizontal: 24,
        marginTop: 24,
    },
    categoriesColumnContainer: {
        gap: 11,
    },
    itemSeparator: {
        height: 10,
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
    plusBanner: {
        marginTop: 24,
        marginHorizontal: 24,
    },
});
