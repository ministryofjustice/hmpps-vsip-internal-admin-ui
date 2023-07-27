import { RequestHandler } from 'express'
import { PrisonService, LocationGroupService } from '../../../services'
import { responseErrorToFlashMessage } from '../../../utils/utils'

export default class SingleLocationGroupController {
  public constructor(
    private readonly prisonService: PrisonService,
    private readonly locationGroupService: LocationGroupService,
  ) {}

  public view(): RequestHandler {
    return async (req, res) => {
      const { reference, prisonId } = req.params
      const { sessionTemplateRef } = req.query

      const prison = await this.prisonService.getPrison(res.locals.user.username, prisonId)

      const locationGroup = await this.locationGroupService.getSingleLocationGroup(res.locals.user.username, reference)

      return res.render('pages/prisons/locationGroups/viewSingleLocationGroup', {
        prison,
        locationGroup,
        sessionTemplateRef,
        message: req.flash('message'),
      })
    }
  }

  public delete(): RequestHandler {
    return async (req, res) => {
      const { reference, prisonId } = req.params

      try {
        const { name } = await this.locationGroupService.getSingleLocationGroup(res.locals.user.username, reference)
        await this.locationGroupService.deleteLocationGroup(res.locals.user.username, reference)
        req.flash('message', `Location group '${name}' has been deleted`)
      } catch (error) {
        req.flash('errors', responseErrorToFlashMessage(error))
        return res.redirect(`/prisons/${prisonId}/location-groups/${reference}`)
      }

      return res.redirect(`/prisons/${prisonId}/location-groups`)
    }
  }
}
