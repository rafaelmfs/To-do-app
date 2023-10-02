import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    flexDirection: 'row',
  },

  summaryItem: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  countText: {
    color: theme.colors.gray_200,
    backgroundColor: theme.colors.gray_400,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    fontWeight: 'bold',
    fontSize: 12,
  },

  summaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
  },

  create: {
    color: theme.colors.blue,
  },
  conclude: {
    color: theme.colors.purple,
  },
})
