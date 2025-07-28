import { onMounted, reactive } from "vue"

export function useFetch(apiUrl = '', onSuccess = () => {}) {
    const state = reactive({
        error: null,
        isLoading: false,
        data: []
    })

    const fetchGames = async () => {
        try {
            state.isLoading = true
            const response = await fetch(apiUrl)
            const json = await response.json()
            state.data = json
            onSuccess(json)
        } catch (error) {
            state.error = error
            console.error(error)
        } finally {
            state.isLoading = false
        }
    }

    onMounted(() => {
        fetchGames();
    })

    return { state }
}