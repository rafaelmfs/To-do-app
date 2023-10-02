import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0008',
  },

  container: {
    width: '80%',
    alignItems: 'center',
    padding: 24,
    gap: 48,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.gray_400,

    borderStyle: 'solid',
    borderColor: theme.colors.gray_700,
    borderRadius: 6,
    borderWidth: 1,
  },

  contentContainer: {
    alignItems: 'center',
    gap: 16,
  },

  titleText: {
    fontSize: 24,
    color: theme.colors.gray_100,
  },

  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.gray_300,
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
  },

  backButton: {
    backgroundColor: theme.colors.danger,
  },

  saveButton: {
    backgroundColor: theme.colors.blue_dark,
  },
})
