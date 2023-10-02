import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 60,
    overflow: 'hidden',

    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray_400,

    marginBottom: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },

  concludeButton: {
    borderRadius: 999,
    width: 23,
    height: 23,
    borderWidth: 1,
    borderColor: theme.colors.blue,
  },

  concludeButtonCompleted: {
    backgroundColor: theme.colors.purple_dark,
    borderColor: theme.colors.purple_dark,
  },

  content: {
    flex: 1,
    gap: 4,
  },

  title: {
    fontWeight: 'bold',
    color: theme.colors.gray_100,
  },

  description: {
    color: theme.colors.gray_300,
  },

  deleteButton: {},

  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: theme.colors.gray_300,
  },
})
