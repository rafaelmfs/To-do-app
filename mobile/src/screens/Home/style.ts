import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: theme.colors.gray_600,
    paddingBottom: 64,
  },

  mainContent: {
    width: '100%',
    paddingHorizontal: 24,

    gap: 32,
    flexDirection: 'column',
    marginTop: -27,
  },

  addTaskArea: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    height: 54,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderStyle: 'solid',
    borderColor: theme.colors.gray_700,
    borderRadius: 6,
    borderWidth: 1,

    padding: 16,
    flex: 1,
    backgroundColor: theme.colors.gray_500,
    color: theme.colors.gray_100,
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,

    backgroundColor: theme.colors.blue_dark,
    borderStyle: 'solid',
    borderColor: theme.colors.gray_700,
    borderRadius: 6,
    borderWidth: 1,
  },

  tasksArea: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
})
