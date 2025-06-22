import baseApi from "@/redux/api/baseApi"
import { TBike, TQueryParam } from "@/types/bikes.type"
import { getItem } from "@/utils/localStorage"

const STORAGE_KEY = "bikes"

const bikeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createBike: builder.mutation({
			query: (formData) => {
				return {
					url: "/bikes",
					method: "POST",
					body: formData,
				}
			},
			invalidatesTags: ["bike"],
		}),
                getBike: builder.query<{ data: TBike[] }, TQueryParam[] | undefined>({
                        async queryFn(args) {
                                try {
                                        let bikes = getItem<TBike[]>(STORAGE_KEY) || []

                                        if (args) {
                                                args.forEach((item: TQueryParam) => {
                                                        const value = String(item.value).toLowerCase()
                                                        if (item.name === "brand") {
                                                                bikes = bikes.filter((b) => b.brand.toLowerCase() === value)
                                                        }
                                                        if (item.name === "category") {
                                                                bikes = bikes.filter((b) => b.category.toLowerCase() === value)
                                                        }
                                                        if (item.name === "searchTerm") {
                                                                bikes = bikes.filter((b) =>
                                                                        b.name.toLowerCase().includes(value) ||
                                                                        b.description.toLowerCase().includes(value)
                                                                )
                                                        }
                                                })
                                        }

                                        return { data: { data: bikes } }
                                } catch (err) {
                                        return { error: err as unknown as Error }
                                }
                        },
                        providesTags: ["bike"],
                }),
                getSingleBike: builder.query<{ data: TBike | undefined }, string | undefined>({
                        async queryFn(id) {
                                try {
                                        const bikes = getItem<TBike[]>(STORAGE_KEY) || []
                                        const bike = bikes.find((b) => b._id === id)

                                        if (!bike) {
                                                return { error: new Error("Not found") }
                                        }

                                        return { data: { data: bike } }
                                } catch (err) {
                                        return { error: err as unknown as Error }
                                }
                        },
                        providesTags: ["bike"],
                }),
		updateBike: builder.mutation({
			query: (options) => {
				return {
					url: `/bikes/${options.id}`,
					method: "PUT",
					body: options.data,
					headers: { Authorization: `${options.token}` },
				}
			},
			invalidatesTags: ["bike"],
		}),
		deleteBike: builder.mutation({
			query: (id) => {
				return {
					url: `/bikes/${id}`,
					method: "DELETE",
				}
			},
			invalidatesTags: ["bike"],
		}),
	}),
})
export default bikeApi
