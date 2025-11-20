<script setup>
import PreviewSection from "@/PreviewSection.vue";
import List from "@/components/list/List.vue";
import ListRow from "@/components/list/ListRow.vue";
import ListCol from "@/components/list/ListCol.vue";

const Rows = [
    [
        'row1 col1',
        'row1 col2',
        'row1 col3',
    ],
    [
        'row2 col1',
        'row2 col2',
        'row2 col3',
    ],
];
</script>

<template>
    <PreviewSection title="Lists">
        <template #default>
            <div class="px-6 py-4 flex gap-4">

                <div class="flex gap-4">
                    <List>
                        <template #default>
                            <ListRow
                                v-for="(row, indexRow) in Rows" :key="indexRow"
                            >
                                <template #default>
                                    <ListCol
                                        modifier="grow"
                                    >
                                        <template #default>
                                            {{ row[0] }}
                                        </template>
                                    </ListCol>
                                    <ListCol>
                                        <template #default>
                                            {{ row[1] }}
                                        </template>
                                    </ListCol>
                                    <ListCol>
                                        <template #default>
                                            {{ row[2] }}
                                        </template>
                                    </ListCol>
                                </template>
                            </ListRow>
                        </template>
                    </List>
                </div>
            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>