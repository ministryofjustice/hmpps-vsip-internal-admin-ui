import TestData from '../../../server/routes/testutils/testData'
import Page from '../../pages/page'
import ViewSessionTemplatePage from '../../pages/prisons/viewSessionTemplatePage'

context('Change active/inactive session template', () => {
  const prisonCode = 'HEI'
  let deactivatedSessionTemplate = null
  let activeSessionTemplate = null

  beforeEach(() => {
    const activePrison = TestData.prisonDto({ active: true })
    deactivatedSessionTemplate = TestData.sessionTemplate({
      active: false,
      prisonId: prisonCode,
      reference: '-ina.dcc.0f',
    })
    activeSessionTemplate = TestData.sessionTemplate({ active: true, prisonId: prisonCode, reference: '-act.dcc.0f' })
    cy.task('reset')
    cy.task('stubSignIn')
    cy.task('stubAuthUser')
    cy.task('stubGetPrison', activePrison)
    cy.task('stubPrisons')
    cy.task('stubGetAllPrisons')
    cy.task('stubGetSessionTemplate', { sessionTemplate: deactivatedSessionTemplate })
    cy.task('stubGetSessionTemplate', { sessionTemplate: activeSessionTemplate })
    cy.task('stubActivateSessionTemplate', {
      sessionTemplate: deactivatedSessionTemplate,
      activeSessionTemplate,
    })
    cy.task('stubDeactivateSessionTemplate', {
      sessionTemplate: activeSessionTemplate,
      deactivatedSessionTemplate,
    })

    cy.signIn()
  })

  it('session template should be deactivated and button should activate', () => {
    // Given
    const viewSessionTemplatePage = Page.createPage(ViewSessionTemplatePage)

    // When
    viewSessionTemplatePage.goTo(prisonCode, deactivatedSessionTemplate.reference)

    // Then
    viewSessionTemplatePage.sessionTemplateStatusLabel().should('include.text', 'Inactive')
    viewSessionTemplatePage.getStatusSwitchButton().should('include.text', 'Activate')
    viewSessionTemplatePage.getDeleteSessionTemplateButton().should('be.enabled')
  })

  it('when inactive session template is activated details should change accordingly', () => {
    // Given
    const viewSessionTemplatePage = Page.createPage(ViewSessionTemplatePage)
    viewSessionTemplatePage.goTo(prisonCode, deactivatedSessionTemplate.reference)

    // When
    viewSessionTemplatePage.getStatusSwitchButton().click()

    // Then
    const label = viewSessionTemplatePage.sessionTemplateStatusLabel()
    label.should('include.text', 'Active')
    label.should('not.include.text', 'Inactive')
    viewSessionTemplatePage.getStatusSwitchButton().should('include.text', 'Deactivate')
    viewSessionTemplatePage.getDeleteSessionTemplateButton().should('be.disabled')
  })

  it('session template should be activated and button should deactivate', () => {
    // Given
    const viewSessionTemplatePage = Page.createPage(ViewSessionTemplatePage)

    // When
    viewSessionTemplatePage.goTo(prisonCode, activeSessionTemplate.reference)

    // Then
    const label = viewSessionTemplatePage.sessionTemplateStatusLabel()
    label.should('include.text', 'Active')
    label.should('not.include.text', 'Inactive')
    viewSessionTemplatePage.getStatusSwitchButton().should('include.text', 'Deactivate')
    viewSessionTemplatePage.getDeleteSessionTemplateButton().should('be.disabled')
  })

  it('when active session template is deactivated details should change accordingly', () => {
    // Given
    const viewSessionTemplatePage = Page.createPage(ViewSessionTemplatePage)
    viewSessionTemplatePage.goTo(prisonCode, activeSessionTemplate.reference)

    // When
    viewSessionTemplatePage.getStatusSwitchButton().click()

    // Then
    const label = viewSessionTemplatePage.sessionTemplateStatusLabel()
    label.should('include.text', 'Inactive')
    viewSessionTemplatePage.getStatusSwitchButton().should('include.text', 'Activate')
    viewSessionTemplatePage.getDeleteSessionTemplateButton().should('be.enabled')
  })
})
