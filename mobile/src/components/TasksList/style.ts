import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },

  empty: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray_400,
    width: '100%',
    minHeight: 208,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  emptyMessage: {
    fontSize: 14,
    color: theme.colors.gray_300,
  },
})
