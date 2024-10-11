from clerk_backend_api import Clerk
from clerk_backend_api.jwks_helpers import AuthenticateRequestOptions


def is_signed_in():
    sdk = Clerk(bearer_auth=os.getenv('CLERK_SECRET_KEY'))
    request_state =

    return request_state.is_signed_in
